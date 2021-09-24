from django.urls import path, include
from .views import TechUserModelViewSet
from rest_framework.routers import DefaultRouter
# from django.views.generic import TemplateView

# creating Router Object
router = DefaultRouter()

# Register viewset with Router
router.register('techuserapi', TechUserModelViewSet, basename= 'techuser')

urlpatterns =[
	path('',include(router.urls))
]