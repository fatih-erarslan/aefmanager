from rest_framework import routers
from .api import SurveyViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/polls', SurveyViewSet, 'polls')

urlpatterns = [
    path('', include(router.urls)),
]

