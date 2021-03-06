# Generated by Django 3.2.12 on 2022-05-27 10:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chapters', '0034_auto_20220131_0002'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chapter',
            options={'ordering': ['number'], 'verbose_name': 'chapter', 'verbose_name_plural': 'chapters'},
        ),
        migrations.AlterModelOptions(
            name='chaptersection',
            options={'ordering': ['number'], 'verbose_name': 'chapter section', 'verbose_name_plural': 'chapter sections'},
        ),
        migrations.AlterModelOptions(
            name='glossaryterm',
            options={'ordering': ['term'], 'verbose_name': 'glossary term', 'verbose_name_plural': 'glossary terms'},
        ),
    ]
