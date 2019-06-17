from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views
from .views import ProfileViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/profile', ProfileViewSet, 'profile')


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('', include(router.urls)),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
