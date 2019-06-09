from django.shortcuts import render
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback

def default(request):
	return render(request, 'render.html', {})

@csrf_exempt
def feedback(request):
	if request.method != "POST":
		return render(request, 'render.html', {})
	try:
		new_obj = Feedback(content = request.POST.get("feedback-content", ''))
		new_obj.save()
		return redirect("/#thanks")
	except:
		return redirect("/#failure")
