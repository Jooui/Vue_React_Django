from rest_framework import viewsets,generics,mixins,status
from rest_framework.response import Response

from .serializers import ExerciceSerializer
from .models import Exercice

# Create your views here.

class ExerciceViewSet(viewsets.ModelViewSet):
    queryset = Exercice.objects.all().order_by('name')
    serializer_class = ExerciceSerializer
    # Para buscar por slug
    lookup_field = 'slug'
    def get_queryset(self):
        queryset = self.queryset
        
        author = self.request.query_params.get('author', None)
        if author is not None:
            queryset = queryset.filter(author__user__username=author)

        categories = self.request.query_params.get('categories', None)
        print(categories)
        return queryset

    def create(self, request):
        serializer_context = {
            'author': request.user.profile,
            'request': request,
        }
        serializer_data = request.data.get('exercice', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)