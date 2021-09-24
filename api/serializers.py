from rest_framework import serializers
from .models import TechUser

class TechUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechUser
        fields ='__all__'

    