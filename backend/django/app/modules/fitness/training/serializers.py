from rest_framework import serializers
from app.modules.fitness.exercice.serializers import ExerciceSerializer
from app.modules.fitness.exercice.models import Exercice
from app.modules.profiles.serializers import ProfileSerializer
from app.modules.fitness.training.models import Difficulty
import json

from .models import Training
# //https://stackoverflow.com/questions/51759020/nested-serializer-through-model-in-django-rest-framework
# https://github.com/encode/django-rest-framework/issues/5403
class DifficultySerializer(serializers.ModelSerializer):
    # exercice = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True)
    # # # training = serializers.PrimaryKeyRelatedField(read_only=True)
    # # # exercice = ExerciceSerializer()

    # # # exercice_id = serializers.CharField(required=False)
    # # # exercice = ExerciceSerializer(read_only=True)
    
    # # # exercice = serializers.CharField(required=False)
    # sets = serializers.CharField(required=False)
    # duration = serializers.CharField(required=False)
    # repetitions = serializers.CharField(required=False)
    class Meta:
        model = Difficulty
        fields = (
            "sets",
            "exercice",
            "duration",
            "repetitions",
            # "exercice_id"
        )

    # def create(self, validated_data):
    #     print("wdadawdadwdwdawdadawawdawdwdawdadwa")
    #     #a categories añadimos las ID insertadas al realizar el POST
    #     exercice = validated_data.pop('exercice_id')
    #     # author = self.context.get('author', None)
    #     difficulty = Difficulty.objects.create(**validated_data, exercice = exercice.pk)
    #     # difficulty.exercice.set(exerceice)
    #     #hacemos un for por todas las categorias y las añadimos una a una a categories
    #     # for category in categories:
    #     #     exercice.categories.add(category)  
    #     return exercice


class TrainingSerializer(serializers.ModelSerializer):
    
    difficulties = DifficultySerializer(many=True)
    #declaramos tambien exercices_id para al realizar el insert pongamos solo las ID (write only)
    # exercices_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(), write_only=True,many=True)
    # difs = DifficultySerializer(many=True, read_only=True)
    author = ProfileSerializer(read_only=True)
    description = serializers.CharField(required=False)
    verified = serializers.BooleanField(default=False)

    # difs = serializers.SerializerMethodField()
    # def get_difs(self,obj):
        


    class Meta:
        model = Training
        fields = ['id', 'name', 'slug','image','description','verified','author','difficulties']
    def create(self, validated_data):
        difficulties_data = validated_data.pop('difficulties')

        # exercices = Difficulty.objects.create(**exercices_data)
        
        author = self.context.get('author', None)

        training = Training.objects.create(author=author, **validated_data)
        # for exercice in exercices_data:
        #     exercices_list.append(Difficulty.objects.create(**exercice, training = training))
        # print(exercices_list)
        # training.exercices.set(exercices_list)
        # training.save()

        for dif_data in difficulties_data:
            print("EXERCICE")
            print()
            # print(exercice_data)
            Difficulty.objects.create(**dif_data,training=training)
        return training
            # Group.objects.create(member=member, **group)
            # for memberhip in memberships:
            #     Membership.objects.create(group=group, **memberships)
            # print(dict(exercice.exercice_id))
            # print(dict(exercice).get("exercice_id"))
            # exer_id = exercice.exercice_id
            # exercice_c = Difficulty.objects.create( training = training, exercice_id=dict(exercice).get("exercice_id"))
            # dif = Difficulty.objects.create(**diffff, training = training)
            # # training.difs.add(dif)
            # dif_list.append(dif)
            # dif.save()
            # training.difficulties.all()

            # dif.all()
            # print(exercice_c.pk)
            # training.create(**exercice)
        
        # for exercice in exercices
            
            # training = TrainingSerializer(exercices = exercice_c)
            # print(exercice_c.exercice.id)
            # training.exercices.create(exercice=exercice_c)
            # training.exercices.append(exercice_c)
            # print("CREATED")
            # print(exercice_c.pk)
            # print(training.exercices)
            # training.save()
           
            # print(exercice_c.pk)
            
            # training.exercices.add(exercice_c.pk)

            # print(training.exercices)


        # training.exercices.add(*exercices_data)
        # training.save()
        # training.exercices.append(exercices_data)
        # print(training)
        





        # a_list = []
        # print(json.loads(json.dumps(exercices_data)))
        # training.exercices.set(exercices)  
        # # print(dict(zip(exercices_data,range(len(exercices_data)))))
        # for exercice in exercices_data:
        #     # print(index)
        #     print(exercice)
        #     print(exercice.__hash__())
        #     # a_list.append(exercice)
        #     # training.exercices["uno"].append(exercice)

        #     # print(dict(exercice))
            
        #     training.exercices.add(exercice)
        #     # print(a_list)
        # # training.exercices.add(a_list)
        # print(training.exercices)
        # training.difficulties.set(dif_list)


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