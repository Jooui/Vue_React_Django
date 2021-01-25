from rest_framework import serializers

from .models import Employee

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    fullname = serializers.SerializerMethodField()
    concatenar = serializers.SerializerMethodField('asdf')

    def asdf(self,obj):
        return obj.name+"STRING"
    
    def get_fullname(self,obj):
        return obj.name+"FULLNAME"



    class Meta:
        model = Employee
        fields = ('name', 'alias', 'id', 'concatenar', 'fullname')