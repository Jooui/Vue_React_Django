# Generated by Django 3.0.2 on 2021-02-08 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercice', '0017_auto_20210205_1057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercice',
            name='image',
            field=models.CharField(blank=True, default='https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png', max_length=255, null=True),
        ),
    ]
