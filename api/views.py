from django.shortcuts import render
from .models import TechUser
from .serializers import TechUserSerializer
from rest_framework import viewsets

from django_filters.rest_framework import DjangoFilterBackend 


# Create your views here.  
class TechUserModelViewSet(viewsets.ModelViewSet):
    queryset = TechUser.objects.all()
    serializer_class = TechUserSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['profession','location']


