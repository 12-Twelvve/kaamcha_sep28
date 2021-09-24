from django.contrib import admin
from .models import TechUser

# Register your models here.

@admin.register(TechUser)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'profession','location']
    