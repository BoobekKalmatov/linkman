from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('phone_number', 'password')
        extra_kwargs = {'password': {'write_only': True}}


        
#jofjksmldffsdlfnk