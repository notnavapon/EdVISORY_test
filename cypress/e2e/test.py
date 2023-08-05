def find_maximum_time(time):
    time_input = list(time)

    print("Question:" + "".join(list(time)))

    for i in range(len(list(time))):
        if time_input[i] == "?" and i == 0:
            if time_input[1] == '?':
                time_input[i] = '2'
            else:
                if int(time_input[1]) < 4:
                    time_input[i] = '2'
                elif int(time_input[1]) >= 4:
                    time_input[i] = '1'
        elif time_input[i] == "?" and i == 1:
            if time_input[0] == '2':
                time_input[i] = '3'
            else:
                time_input[i] = '9'
        elif time_input[i] == "?" and i == 3:
            time_input[i] = '5'
        elif time_input[i] == "?" and i == 4:
            time_input[i] = '9'
        print("i =", i, ":", (time_input))

        
    max_time = ''.join(time_input) + "\n"
    return max_time

# Test cases
print(find_maximum_time("23:5?"))  # Output: "23:59"
print(find_maximum_time("?4:5?"))  # Output: "14:59"
print(find_maximum_time("0?:??"))  # Output: "09:59"
print(find_maximum_time("??:??"))  # Output: "23:59"