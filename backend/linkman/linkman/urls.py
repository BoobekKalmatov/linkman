from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name ='token_refresh'),
    path('logout/', LogoutView.as_view(), name ='logout'),
    path('api/v1/auth/', include('djoser.urls')),
]