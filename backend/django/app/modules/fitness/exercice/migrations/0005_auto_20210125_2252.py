# Generated by Django 3.0.2 on 2021-01-25 22:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0002_auto_20210125_1052'),
        ('exercice', '0004_auto_20210125_2248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercice',
            name='categories',
            field=models.ForeignKey(blank=True, default=12, on_delete=django.db.models.deletion.DO_NOTHING, related_name='categories', to='category.Category'),
        ),
    ]
