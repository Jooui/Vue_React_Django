from rest_framework import serializers

from .models import Training
class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ['id', 'name', 'slug','image','description','image','verified','author']

    # def to_representation(self, obj):
    #     return obj.name

    # def get_queryset(self):
    #   queryset = Category.objects.filter(pk=self.kwargs['id'])
    #   return queryset