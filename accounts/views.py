from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from accounts.serializers import UserSerializer, RegistarSerializer, LoginSerializer

# Create your views here.


class RegistarAPI(generics.GenericAPIView):
    serializer_class = RegistarSerializer

    def post(self, req, *args, **kwargs):
        serializer = self.get_serializer(data=req.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)[1]

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token,
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, req, *args, **kwargs):
        serializer = self.get_serializer(data=req.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)

        return Response({
            'user': UserSerializer(user, context=self.get_serializer_context()).data,
            'token': token,
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
