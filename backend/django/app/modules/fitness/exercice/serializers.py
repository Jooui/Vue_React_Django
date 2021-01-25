from rest_framework import serializers

from .models import Exercice

class ExerciceSerializer(serializers.HyperlinkedModelSerializer):
    # fullname = serializers.SerializerMethodField()
    # concatenar = serializers.SerializerMethodField('asdf')

    # def asdf(self,obj):
    #     return obj.name+"STRING"
    
    # def get_fullname(self,obj):
    #     return obj.name+"FULLNAME"



    class Meta:
        model = Exercice
        fields = ('id', 'slug', 'name', 'description', 'image', 'author')