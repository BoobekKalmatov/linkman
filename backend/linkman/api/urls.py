from django.urls import path, include
from .views import *

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('authentication/', UserLoginAPIView.as_view(), name='user-authentication'),
    path('rest/', include('rest_framework.urls'))
    # Другие URL маршруты вашего приложения
]
