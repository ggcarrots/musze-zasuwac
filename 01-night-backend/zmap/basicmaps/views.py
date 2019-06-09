from django.http import JsonResponse
from django.shortcuts import redirect
from .models import Map
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def submit(request):
	if request.method != "POST":
		return JsonResponse({"status": "failure"})
	try:
		new_obj = Map(
			map_type = request.POST.get("map_type", ''),
			category = request.POST.get("category", ''),
			title = request.POST.get("title", ''),
			desc = request.POST.get("desc", ''),
			address = request.POST.get("address", ''),
			lat = request.POST.get("lat", ''),
			lng = request.POST.get("lng", '')
		)
		new_obj.save()
		return redirect("default")
	except:
		return redirect("/#failure")

def retrieve(request, map_type):
	result_set = Map.objects.filter(map_type__exact=map_type)
	results = [obj.as_json() for obj in result_set]
	return JsonResponse(results, safe=False)

