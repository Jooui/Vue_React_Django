# Generated by Django 3.0.2 on 2021-02-02 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_auto_20210125_1052'),
        ('exercice', '0009_remove_exercice_categories'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercice',
            name='categories',
            field=models.ManyToManyField(blank=True, to='category.Category'),
        ),
    ]
