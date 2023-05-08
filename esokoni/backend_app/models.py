from django.db import models

# Create your models here.

class Billing(models.Model):
    name = models.CharField( max_length=50)
    email = models.EmailField( max_length=254)
    phone = models.IntegerField()
    address = models.CharField(max_length=100)

