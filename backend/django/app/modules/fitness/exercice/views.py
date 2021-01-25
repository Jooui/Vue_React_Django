from rest_framework import viewsets,generics,mixins


from .serializers import ExerciceSerializer
from .models import Exercice

# Create your views here.

class ExerciceViewSet(viewsets.ModelViewSet):
    queryset = Exercice.objects.all().order_by('name')
    serializer_class = ExerciceSerializer