from django.db import models

# Create your models here.
class TechUser(models.Model):
    first_name = models.CharField(blank=False, max_length=25)
    last_name = models.CharField(blank=False, max_length=25)
    profession = models.CharField(blank=False, max_length=25)
    profession2 = models.CharField(blank=True, max_length=25)
    profession3 = models.CharField(blank=True, max_length=25)
    bio = models.TextField(blank=False, max_length=250)
    phone = models.IntegerField(blank= False)
    email = models.CharField(blank= True, max_length=25)
    location = models.CharField(blank=False, max_length=25)
    
    
