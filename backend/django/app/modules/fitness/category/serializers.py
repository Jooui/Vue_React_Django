from rest_framework import serializers

from .models import Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    # fullname = serializers.SerializerMethodField()
    # concatenar = serializers.SerializerMethodField('asdf')

    # def asdf(self,obj):
    #     return obj.name+"STRING"
    
    # def get_fullname(self,obj):
    #     return obj.name+"FULLNAME"



    class Meta:
        model = Category
        fields = ('id', 'name', 'image')