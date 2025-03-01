from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Account, Transaction, Notification
from .serializers import UserSerializer, AccountSerializer, TransactionSerializer, NotificationSerializer

# Login API
class LoginView(generics.GenericAPIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "user": UserSerializer(user).data,
                }
            )
        return Response({"error": "Invalid credentials"}, status=400)

# Dashboard Data
class DashboardView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        account = Account.objects.get(user=request.user)
        transactions = Transaction.objects.filter(user=request.user)
        notifications = Notification.objects.filter(user=request.user)

        return Response(
            {
                "balance": account.balance,
                "transactions": TransactionSerializer(transactions, many=True).data,
                "notifications": NotificationSerializer(notifications, many=True).data,
            }
        )
