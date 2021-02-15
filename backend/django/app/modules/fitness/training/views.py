from rest_framework import viewsets,generics,mixins


from .serializers import TrainingSerializer
from .models import Training

# Create your views here.

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all().order_by('name')
    serializer_class = TrainingSerializer