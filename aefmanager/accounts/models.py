from django.db import models
from PIL import Image
from django.contrib.auth.models import User


class Profile(models.Model):

    LOCATIONS = (
        ('Gaziantep', 'Gaziantep, Turkey'),
        ('London', 'London, United Kingdom'),
        ('Madrid', 'Madrid, Spain'),
        ('Stockholm', 'Stockholm, Sweden'),
    )

    GENDERS = (
        ('Female', 'Female'),
        ('Male', 'Male'),
        ('LGBT-Q', 'LGBT-Q'),
        ('Rather Not Say', 'Rather Not Say'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=24, choices=LOCATIONS, default='Stockholm')
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=24, choices=GENDERS, default='Rather Not Say')
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    bio = models.TextField(max_length=500, blank=True)
    phone = models.CharField(max_length=24, blank=True)
    is_educator = models.BooleanField(default=True)
    is_mentor = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.first_name} ' + f'{self.user.last_name}'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)
        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
