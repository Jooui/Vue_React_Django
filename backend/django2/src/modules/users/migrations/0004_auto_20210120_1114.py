# Generated by Django 2.1.1 on 2021-01-20 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20201225_1052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='CPF',
            field=models.CharField(max_length=12, unique=True),
        ),
    ]
