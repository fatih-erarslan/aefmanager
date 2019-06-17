from django.db import models
from django.contrib.auth.models import User


class Survey(models.Model):
    autonomy = models.TextField(max_length=500, blank=True)
    relatedness = models.TextField(max_length=500, blank=True)
    competence = models.TextField(max_length=500, blank=True)
    autonomy_2 = models.TextField(max_length=500, blank=True)
    relatedness_2 = models.TextField(max_length=500, blank=True)
    competence_2 = models.TextField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="surveys", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.owner.first_name} ' + f'{self.owner.last_name}'
