from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('surveys.urls')),
    path('', include('polls.urls')),
    path('', include('accounts.urls'))
]
