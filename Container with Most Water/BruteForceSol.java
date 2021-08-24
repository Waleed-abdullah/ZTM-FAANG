class Solution // Time O(n^2) Space O(1)
{
    public int maxArea(int[] height)
	{
        int maxArea = 0;
		
        for (int i = 0; i < height.length; i++)
		{
			for (int j = i + 1; j < height.length; j++)
			{
				int length = Math.min(height[i], height[j]);
				int width = j - i;
				int currArea =  length * width;
				maxArea = Math.max(maxArea, currArea);
			}
		}
        return maxArea;
    }
}