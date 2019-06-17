from django.shortcuts import render
from rest_framework import viewsets, permissions

from .models import Profile
from .serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return self.request.user.polls.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
