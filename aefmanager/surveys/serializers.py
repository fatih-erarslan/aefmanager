from rest_framework import serializers
from .models import Survey


# Lead Serializer
class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = '__all__'
