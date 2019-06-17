from rest_framework import serializers
from .models import Poll


# Lead Serializer
class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = '__all__'
