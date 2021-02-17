from rest_framework import viewsets,generics,mixins


from .serializers import TrainingSerializer
from .models import Training

from rest_framework import viewsets,generics,mixins,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import (AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly)

# Create your views here.

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all().order_by('name')
    serializer_class = TrainingSerializer

    def create(self, request):
        serializer_context = {
            'author': request.user.profile,
            'request': request,
        }
        serializer_data = request.data.get('training', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)