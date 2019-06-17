from .models import Survey
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, permissions, renderers
from .serializers import SurveySerializer

# Survey Viewset


class SurveyViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SurveySerializer

    def get_queryset(self):
        return self.request.user.surveys.all()

    @action(detail=True, renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        survey = self.get_object()
        return Response(survey.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
