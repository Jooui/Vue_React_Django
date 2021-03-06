# Generated by Django 3.0.2 on 2021-01-25 11:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0002_auto_20210125_1052'),
        ('profiles', '0003_profile_favorites'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exercice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(blank=True, null=True, unique=True)),
                ('name', models.CharField(max_length=60)),
                ('description', models.TextField()),
                ('image', models.CharField(max_length=60, null=True)),
                ('verified', models.BooleanField(default=False)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exercices', to='profiles.Profile')),
                ('categories', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categories', to='category.Category')),
            ],
        ),
    ]
