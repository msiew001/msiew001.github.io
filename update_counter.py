#!/usr/bin/env python3

# Read current counter value from the file
with open("counter.txt", "r") as file:
    counter_value = int(file.read())

# Increment the counter value
counter_value += 1

# Write the updated counter value back to the file
with open("counter.txt", "w") as file:
    file.write(str(counter_value))

# Print the updated counter value as the response
print("Content-type: text/plain\n")
print(counter_value)