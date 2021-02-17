from rest_framework import serializers
from app.modules.fitness.exercice.serializers import ExerciceSerializer
from app.modules.fitness.exercice.models import Exercice
from app.modules.profiles.serializers import ProfileSerializer

from .models import Training
class TrainingSerializer(serializers.ModelSerializer):
    exercices = ExerciceSerializer(many=True, read_only=True)
    #declaramos tambien exercices_id para al realizar el insert pongamos solo las ID (write only)
    exercices_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True,many=True)
    author = ProfileSerializer(read_only=True)
    description = serializers.CharField(required=False)
    verified = serializers.BooleanField(default=False)
    class Meta:
        model = Training
        fields = ['id', 'name', 'slug','image','description','verified','author','exercices','exercices_id']
    def create(self, validated_data):
        exercices = validated_data.pop('exercices_id')
        author = self.context.get('author', None)
        training = Training.objects.create(author=author, **validated_data)

        for exercice in exercices:
            training.exercices.add(exercice)  
        return training

class DifficultySerializer(serializers.ModelSerializer):
    sets = serializers.CharField(required=False)
    duration = serializers.CharField(required=False)
    repetitions = serializers.CharField(required=False)
    exercices = ExerciceSerializer(many=True, read_only=True)
    exercices_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True,many=True)
    class Meta:
        model = Training
        fields = ['id', 'exercices','exercices_id','sets','duration','repetitions']
    def create(self, validated_data):
        exercices = validated_data.pop('exercices_id')
        author = self.context.get('author', None)
        training = Training.objects.create(author=author, **validated_data)

        for exercice in exercices:
            training.exercices.add(exercice)  
        return training