from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Poll(models.Model):
    SCORES = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    )
    empathy = models.IntegerField(verbose_name="Empathy", choices=SCORES, editable=True)
    flexibility = models.IntegerField(verbose_name="Flexibility", choices=SCORES, editable=True,)
    andragogy = models.IntegerField(verbose_name="Andragogy", choices=SCORES, editable=True)
    trust = models.IntegerField(verbose_name="Trust", choices=SCORES, editable=True)
    patience = models.IntegerField(verbose_name="Patience", choices=SCORES, editable=True)
    culture = models.IntegerField(verbose_name="Culture", choices=SCORES, editable=True)
    gender = models.IntegerField(verbose_name="Gender", choices=SCORES, editable=True)
    owner = models.ForeignKey(User, related_name="polls", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.owner.first_name} ' + f'{self.owner.last_name}'
