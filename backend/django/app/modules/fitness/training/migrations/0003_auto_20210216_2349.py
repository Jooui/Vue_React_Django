# Generated by Django 3.0.2 on 2021-02-16 23:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0002_auto_20210216_2348'),
    ]

    operations = [
        migrations.RenameField(
            model_name='training',
            old_name='exercices',
            new_name='exercices_list',
        ),
    ]
