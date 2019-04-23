from django.db import models

# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=100)
    body = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
