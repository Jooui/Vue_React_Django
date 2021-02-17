from rest_framework import serializers
from app.modules.fitness.exercice.serializers import ExerciceSerializer
from app.modules.fitness.exercice.models import Exercice
from app.modules.profiles.serializers import ProfileSerializer
from app.modules.fitness.training.models import Difficulty

from .models import Training
class DifficultySerializer(serializers.ModelSerializer):
    exercice = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True)
    # exercice = ExerciceSerializer(read_only=True)
    class Meta:
        model = Difficulty
        fields = (
            "sets",
            "exercice",
            "duration",
            "repetitions"
        )

    # def create(self, validated_data):
    #     print(validated_data)
    #     exercice = validated_data.pop('exercice_id')
    #     print(exercice)
    #     training.exercice.set(exercice)  
    #     for exercice in exercices:
    #         training.exercices.add(exercice)  
    #     return training


class TrainingSerializer(serializers.ModelSerializer):
    exercices = DifficultySerializer(many=True)
    #declaramos tambien exercices_id para al realizar el insert pongamos solo las ID (write only)
    # exercices_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True,many=True)
    author = ProfileSerializer(read_only=True)
    description = serializers.CharField(required=False)
    verified = serializers.BooleanField(default=False)
    class Meta:
        model = Training
        fields = ['id', 'name', 'slug','image','description','verified','author','exercices']
    def create(self, validated_data):
        exercices_data = validated_data.pop('exercices')

        
        author = self.context.get('author', None)
        training = Training.objects.create(author=author, **validated_data)
        print("wdadawdawdwa")
        print(exercices_data)
        # training.exercices.set(exercices_data)
        # print(training.exercices)
        
        a_list = []

        # training.exercices.set(exercices)  
        print(dict(zip(exercices_data,range(len(exercices_data)))))
        for exercice in exercices_data:
            # print(index)
            a_list.append(exercice)
            training.exercices["uno"].append(exercice)

            # print(dict(exercice))
            
            # training.exercices.add(dict(exercice))
            print(a_list)
        # training.exercices.add(a_list)
        print(training.exercices)
        return training

# class DifficultySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Difficulty
#         fields = (
#             "sets",
#             "exercice",
#             "training",
#             'duration',
#             'repetitions'
#         )
    # sets = serializers.CharField(required=False)
    # duration = serializers.CharField(required=False)
    # repetitions = serializers.CharField(required=False)
    # exercices = ExerciceSerializer(many=True, read_only=True)
    # exercices_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True,many=True)
    # class Meta:
    #     model = Training
    #     fields = ['id', 'exercices','exercices_id','sets','duration','repetitions']
    # def create(self, validated_data):
    #     exercices = validated_data.pop('exercices_id')
    #     author = self.context.get('author', None)
    #     training = Training.objects.create(author=author, **validated_data)

    #     for exercice in exercices:
    #         training.exercices.add(exercice)  
    #     return training