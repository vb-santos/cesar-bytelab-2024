from django.shortcuts import render
# from django.http import HttpResponse
from .models import Task

# Create your views here.
# def pagina_principal(request):
#     return HttpResponse("Oi, esta é minha primeira página")

# A view da lista de atividades
def task_list(request):
    tasks = Task.objects.all()
    return render(request, 'todo/task_list.html', {'tasks': tasks})