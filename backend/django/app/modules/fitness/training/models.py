from django.db import models
from django.template.defaultfilters import slugify

class Training(models.Model):
    slug = models.SlugField(unique=True, null = True, blank = True)
    name = models.CharField(max_length=60)
    description = models.TextField()
    image = models.CharField(max_length=255, default='https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png',blank = True,null = True)
    verified = models.BooleanField(default=False)
    author = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE, related_name='training')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)+"-"+str(randint(1000,9999))
        super(Training, self).save(*args, **kwargs)

    def __str__(self):
        return self.name



