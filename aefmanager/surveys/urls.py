from django.urls import path, include
from rest_framework import routers
from .api import SurveyViewSet

router = routers.DefaultRouter()
router.register('api/surveys', SurveyViewSet, 'surveys')

urlpatterns = [
    path('', include(router.urls)),
]
