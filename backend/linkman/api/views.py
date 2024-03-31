from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login

class UserRegistrationView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class UserLoginAPIView(APIView):
    
    serializer_class = CustomUserSerializer

    def post(self, request):
        phone_number = request.data.get('phone_number')
        password = request.data.get('password')

        user = authenticate(request, phone_number=phone_number, password=password)

        if user:

            login(request, user)
            return Response({'message': 'User authenticated'}, status=status.HTTP_200_OK)
        return Response({'message': 'Invalid phone number or password'}, status=status.HTTP_401_UNAUTHORIZED)
