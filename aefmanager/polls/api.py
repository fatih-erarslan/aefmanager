from .models import Poll
from rest_framework import viewsets, permissions
from .serializers import PollSerializer

# Survey Viewset


class SurveyViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = PollSerializer

    def get_queryset(self):
        return self.request.user.polls.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
