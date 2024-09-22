from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class BFHLView(APIView):
    
    def get(self, request):
        return Response({"operation_code": 1}, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data.get('data')
        numbers = [item for item in data if item.isdigit()]
        alphabets = [item for item in data if item.isalpha()]
        highest_lowercase = max([char for char in alphabets if char.islower()], default="")
       
        response_data = {
            "is_success": True,
            "user_id": "PRANAVV HARAN NAGARAJAN", 
            "email": "pn7102@srmist.edu.in",
            "roll_number": "RA2111003010735",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": [highest_lowercase] if highest_lowercase else [],
            "file_valid": False  # Since we are not handling files yet
        }
        return Response(response_data, status=status.HTTP_200_OK)
