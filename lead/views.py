from django.shortcuts import render

from lead.models import Lead
from rest_framework import viewsets, permissions
from lead.serializers import LeadSerializer
# Create your views here.


class LeadViewsets(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
