from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the Financial Dashboard API!"})

urlpatterns = [
    path("", home, name="home"),  
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
]
