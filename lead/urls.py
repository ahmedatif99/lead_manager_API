from django.urls import path
from rest_framework import routers
from .views import LeadViewsets

router = routers.DefaultRouter()
router.register('api/leads', LeadViewsets, 'leads')

urlpatterns = router.urls
