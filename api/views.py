from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .methods import *

# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes = [

        {
            'Endpoint' : '/notes/',
            'method' : 'GET',
            'body' : None,
            'description' : 'returns an array of notes'
        },

        {
            'Endpoint' : '/notes/id',
            'method' : 'GET',
            'body' : None,
            'description' : 'returns a single note'
        },

        {
            'Endpoint' : '/notes/id/update',
            'method' : 'PUT',
            'body' : {'body': ""},
            'description' : 'updates a single note'
        },

        {
            'Endpoint' : '/notes/create',
            'method' : 'POST',
            'body' : {'body': ""},
            'description' : 'Creates a note'
        },

        {
            'Endpoint' : '/notes/id/delete',
            'method' : 'DELETE',
            'body' : None,
            'description' : 'Deletes a single note'
        },

    ]

    return Response(routes)


@api_view(['GET','POST'])
def getNotes(request):

    if request.method == 'GET':
       return getNotesList(request)

    if request.method == 'POST':
        return createNote(request)

@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):

    if request.method ==  'GET':
        return getNoteDetails(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)
        
    if request.method == 'DELETE':
        return deleteNote(request, pk)
